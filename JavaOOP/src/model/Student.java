package model;

public class Student {
    private String name;
    private int age;
    private String sex;
    private String sid;
    public Student(){}
    public Student(String name,int age,String sex,String sid){
        this.age=age;
        this.name=name;
        this.sex=sex;
        this.sid=sid;
    }

    public int getAge() {
        return age;
    }

    public String getSid() {
        return sid;
    }

    public String getName() {
        return name;
    }

    public String getSex() {
        return sex;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public void setSid(String sid) {
        this.sid = sid;
    }
}
