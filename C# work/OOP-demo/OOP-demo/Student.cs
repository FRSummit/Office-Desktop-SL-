using System;
using System.Collections.Generic;
using System.Text;

namespace OOP_demo {
    class Student {
        String id;
        String name;
        String phone;
        String email;
        String address;

        public Student() {
        }

        public Student(string id, string name, string phone, string email, string address) {
            this.id = id;
            this.name = name;
            this.phone = phone;
            this.email = email;
            this.address = address;
        }

        public string Id {
            get => id;
            set => id = value;
        }
        public string Name {
            get => name;
            set => name = value;
        }
        public string Phone {
            get => phone;
            set => phone = value;
        }
        public string Email {
            get => email;
            set => email = value;
        }
        public string Address {
            get => address;
            set => address = value;
        }
    }
}
