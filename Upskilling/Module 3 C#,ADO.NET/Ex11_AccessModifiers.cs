using System;

class Animal
{
    public    string Name   = "Animal";
    private   string secret = "hidden";
    protected string family = "Mammal";

    public void ShowAll()
        => Console.WriteLine($"Name={Name}, Secret={secret}, Family={family}");
}

class Dog : Animal
{
    public void ShowInherited()
        => Console.WriteLine($"Dog family: {family}");
}

class Program
{
    static void Main()
    {
        Animal a = new Animal();
        a.ShowAll();
        Console.WriteLine($"Public Name: {a.Name}");

        Dog d = new Dog();
        d.ShowInherited();
    }
}
