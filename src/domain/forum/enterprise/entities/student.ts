import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

interface StudentsProps {
  name: string;
  email: string;
  password: string;
}

export class Student extends Entity<StudentsProps> {
  get name() {
    return this.name;
  }

  get email() {
    return this.email;
  }

  get password() {
    return this.password;
  }

  static create(props: StudentsProps, id?: UniqueEntityID) {
    const student = new Student(props, id);

    return student;
  }
}
