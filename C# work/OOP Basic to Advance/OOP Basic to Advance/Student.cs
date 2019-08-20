using System;
using System.Collections.Generic;
using System.Text;

namespace OOP_Basic_to_Advance {
    class Student : Person {

        String cgpa;
        String grt;

        public Student() {
        }

        public Student(string cgpa, string grt) {
            this.cgpa = cgpa;
            this.grt = grt;
        }

        public string Cgpa {
            get => cgpa;
            set => cgpa = value;
        }
        public string Grt {
            get => grt;
            set => grt = value;
        }
        public void displayS()
        {
            Console.WriteLine("This is student class");
        }
    }
}
