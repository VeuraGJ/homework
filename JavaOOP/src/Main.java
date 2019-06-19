import model.Student;

public class Main {
    public static void main(String[] args){
        Student st=new Student();
        st.setName("林小小");
        st.setAge(18);
        st.setSex("女");
        st.setSid("98787989833");
        System.out.println("name；"+st.getName()+";age:"+st.getAge()+";sex:"+st.getSex()+";id:"+st.getSid());
    }
}
