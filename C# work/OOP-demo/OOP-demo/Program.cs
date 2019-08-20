using System;

namespace OOP_demo
{
    class Program
    {
        static void Main(string[] args)
        {
            Student student = new Student("0123", "Salam", "01675-869321", "email", "Dhaka");

            Console.WriteLine(student.Id + " " +
                student.Name + " " +
                student.Phone + " " +
                student.Email + " " + 
                student.Address);
        }
    }
}
