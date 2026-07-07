using System;
using System.Threading;

class Program
{
    static readonly object lockA = new object();
    static readonly object lockB = new object();

    static void Thread1()
    {
        if (Monitor.TryEnter(lockA, 500))
        {
            try
            {
                Console.WriteLine("T1 acquired lockA");
                Thread.Sleep(100);
                if (Monitor.TryEnter(lockB, 500))
                {
                    try { Console.WriteLine("T1 acquired lockB - done"); }
                    finally { Monitor.Exit(lockB); }
                }
                else Console.WriteLine("T1: lockB timeout (deadlock avoided)");
            }
            finally { Monitor.Exit(lockA); }
        }
    }

    static void Thread2()
    {
        if (Monitor.TryEnter(lockB, 500))
        {
            try
            {
                Console.WriteLine("T2 acquired lockB");
                Thread.Sleep(100);
                if (Monitor.TryEnter(lockA, 500))
                {
                    try { Console.WriteLine("T2 acquired lockA - done"); }
                    finally { Monitor.Exit(lockA); }
                }
                else Console.WriteLine("T2: lockA timeout (deadlock avoided)");
            }
            finally { Monitor.Exit(lockB); }
        }
    }

    static void Main()
    {
        var t1 = new Thread(Thread1);
        var t2 = new Thread(Thread2);
        t1.Start(); t2.Start();
        t1.Join();  t2.Join();
        Console.WriteLine("Done - no indefinite deadlock.");
    }
}
