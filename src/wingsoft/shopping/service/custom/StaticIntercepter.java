package wingsoft.shopping.service.custom;

import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.ActionProxy;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.Result;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;
import net.sf.json.JSON;
import net.sf.json.JSONObject;
import org.apache.struts2.ServletActionContext;
import wingsoft.shopping.action.BaseAction;
import wingsoft.shopping.util.Comm;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.struts2.json.JSONResult;

import java.io.PrintWriter;
import java.util.Enumeration;

public class StaticIntercepter extends AbstractInterceptor {

    @Override
    public String intercept(ActionInvocation actionInvocation) throws Exception {
        System.out.println("过滤开始");
//        actionInvocation.invoke();
        String result = "error";
        HttpServletRequest request = ServletActionContext.getRequest();
        HttpServletResponse response =ServletActionContext.getResponse();
        String realUrl = request.getRequestURL()+ this.getRealUrls(request);
        CreateStaticFile csf = new CreateStaticFile();
        String exists = csf.getIndex(realUrl);
        String jsons = "";
//        System.out.println("存在吗啊吗啊啊阿萨德暗示?????:"+exists);w
        if(exists.equals("notExists")){
            BaseAction ba =null ;
//            System.out.println("文件不存在需要过滤:"+realUrl);
            actionInvocation.invoke();
                Object action = actionInvocation.getAction();
                String actionName = actionInvocation.getInvocationContext().getName();
//                System.out.println("1:"+actionInvocation.getAction());
                ba = (BaseAction) actionInvocation.getAction();
                if(ba.getJsonArray()!=null&&ba.getJsonArray().toString()!=""){
                    csf.getURLContent(realUrl,ba.getJsonArray().toString());//文件
                }else if(ba.getJsonObject()!=null&&ba.getJsonObject().toString()!=""){
                    csf.getURLContent(realUrl,ba.getJsonObject().toString());//谢文杰
                }else if(ba.getJson()!=null&&ba.getJson()!=""){
//                    System.out.println("问题就出在这里写文件时候的的的的的的");
                    JSONObject jo = new JSONObject();
                    jo.put("json",ba.getJson());
//                    System.out.println(ba.getJson());
                    csf.getURLContent(realUrl,jo.toString());
                }
        }
        else{
            response.setCharacterEncoding("utf-8");
            response.setContentType("html/text");
            jsons  = csf.returnJson(exists);
            PrintWriter out=null;
            out=response.getWriter();
            out.print(jsons);
            out.flush();
            out.close();
//            System.out.println(exists);
//            System.out.println(jsons);
//            System.out.println("返回文本");
            return "success";
        }
        System.out.println("过滤结束");
        return null;
    }

    private String getRealUrls(HttpServletRequest request){
        String strs = "?";
        Enumeration<String> enums = request.getParameterNames();
        while(enums.hasMoreElements()){
            String tempStr = enums.nextElement();
            strs = strs + tempStr +"="+ Comm.nTrim(request.getParameter(tempStr)) + "&";
        }
        strs = strs.substring(0,strs.length()-1);
        return strs;
    }
}
