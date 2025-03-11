
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import org.json.JSONArray;
import org.json.JSONObject;

public class test {
 static File outPath=new File("sdcard/out");
 public static void main(String[] args) throws Exception {
  outPath.mkdirs();
  outfromdata();
  System.out.println();
 }
 /*
  https://products.aspose.app/cells/zh/conversion/xlsx-to-json
  NDT-1.15.json xlxs2json
  */
 public static void outfromdata() throws Exception {
  JSONObject js=pare(new File("sdcard/a"));
  BufferedWriter index=new BufferedWriter(new FileWriter(new File(outPath, "index.md")));
  index.write("# index");
  JSONArray list= js.getJSONArray("单位代码");
  BufferedWriter buff=null;
  for (int i=0;i < list.length();++i) {
   JSONObject obj=list.optJSONObject(i);
   if (obj == null) {
    if (buff != null) {
     buff.close();
     buff = null;
    }
    continue;
   }
   String str=obj.optString("key翻译");
   if (str == null)continue;
   String key=obj.optString("key描述解释");
   boolean isSection=key == null ?false: key.startsWith("[") && key.endsWith("]");
   if (isSection || str.matches("[a-zA-Z]{2,}")) {
    if (buff != null)buff.close();
    if (isSection) {
     int j=key.indexOf('_');
     if (j < 0)j = key.length() - 1;
     str = key.substring(1, j);
    }
    if ("comment".equals(str)) {
     continue;
    }
    index.write("\n## [");
    char c=str.charAt(0);
    if (c >= 'A' && c <= 'Z') {
     char[] crr=str.toCharArray();
     crr[0] = Character.toLowerCase(c);
     str = new String(crr);
    }
    String rstr=str.equals("leg") ?"leg/arm": str.equals("global") ?"global_resource": str.equals("action") ?"action/hiddenAction": str;
    index.write(rstr);
    index.write("](");
    index.write(str);
    index.write(".md");
    index.write(")\n");
    index.write(obj.optString("key代码"));
    buff = new BufferedWriter(new FileWriter(new File(outPath, str + ".md")));
    buff.write("# ");
    buff.write(rstr);
    buff.write("\n");
   } else if (buff != null) {
    key = obj.optString("key代码");
    if (key == null || key.length() == 0)continue;
    char c=key.charAt(0);
    if (Character.isLowerCase(c) || Character.isUpperCase(c) || c == '@') {
     buff.write("## ");
     buff.write(key);
     buff.write("\ntranslation:");
     buff.write(str.replaceFirst(":$", ""));
     buff.write("\n<br>type:");
     String type=obj.optString("key值类型", "string");
     buff.write(type);
     String type2=obj.optString("Column8");
     if (type2 != null && type2.length() > 0) {
      if (!type.equals(type2)) {
       buff.write('/');
       buff.write(type2);
      }
     }
     str = obj.optString("key描述解释");
     if (str != null) {
      buff.write("\n<br>");
      buff.write(str);
     }
     buff.write('\n');
    }
   }
  }
  if (buff != null)
   buff.close();
  index.close();
 }
 public static JSONObject pare(File f) throws Exception {
  FileInputStream fi=new FileInputStream(f);
  byte[] by=new byte[fi.available()];
  fi.read(by);
  return new JSONObject(new String(by));
 }
}

