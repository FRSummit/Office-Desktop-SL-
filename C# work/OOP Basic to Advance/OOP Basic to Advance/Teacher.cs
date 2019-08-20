using System;
using System.Collections.Generic;
using System.Text;

namespace OOP_Basic_to_Advance {
    class Teacher : Person
    {

        String designation;
        String dept;

        public Teacher() {
        }

        public Teacher(string designation, string dept) {
            this.designation = designation;
            this.dept = dept;
        }

        public string Designation {
            get => designation;
            set => designation = value;
        }
        public string Dept {
            get => dept;
            set => dept = value;
        }

        public void displayT() {
            Console.WriteLine("This is teacher class");
        }
    }
}
