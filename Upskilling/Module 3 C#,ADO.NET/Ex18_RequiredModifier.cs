using System;

class Student
{
    public required string Name   { get; set; }
    public required int    RollNo { get; set; }
    public string          Grade  { get; set; } = "N/A";
}

class Program
{
    static void Main()
    {
        var s = new Student { Name = "Ravi", RollNo = 101, Grade = "A" };
        Console.WriteLine($"Student: {s.Name}, Roll: {s.RollNo}, Grade: {s.Grade}");

        // var s2 = new Student { Name = "Priya" };
        // CS9035: Required member 'RollNo' must be set in object initializer
    }
}
