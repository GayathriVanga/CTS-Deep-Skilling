using System;
using Microsoft.Data.SqlClient;

class Program
{
    const string ConnStr =
        "Server=localhost;Database=TestDB;" +
        "Trusted_Connection=True;TrustServerCertificate=True;";

    static void Main()
    {
        using var conn = new SqlConnection(ConnStr);
        conn.Open();
        Console.WriteLine("Connected to SQL Server.");

        // CREATE TABLE
        ExecuteNonQuery(conn, @"
            IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Employees')
            CREATE TABLE Employees (
                Id INT IDENTITY PRIMARY KEY,
                Name NVARCHAR(100),
                Position NVARCHAR(100),
                Salary DECIMAL(10,2))");

        // INSERT
        ExecuteNonQuery(conn,
            "INSERT INTO Employees VALUES ('Alice','Developer',75000)");
        ExecuteNonQuery(conn,
            "INSERT INTO Employees VALUES ('Bob','Designer',65000)");
        Console.WriteLine("Inserted 2 employees.");

        // READ
        Console.WriteLine("\n--- All Employees ---");
        ReadAll(conn);

        // UPDATE
        ExecuteNonQuery(conn,
            "UPDATE Employees SET Salary=80000 WHERE Name='Alice'");
        Console.WriteLine("\nUpdated Alice's salary.");
        ReadAll(conn);

        // DELETE
        ExecuteNonQuery(conn,
            "DELETE FROM Employees WHERE Name='Bob'");
        Console.WriteLine("\nDeleted Bob.");
        ReadAll(conn);
    }

    static void ReadAll(SqlConnection conn)
    {
        using var cmd = new SqlCommand("SELECT * FROM Employees", conn);
        using var reader = cmd.ExecuteReader();
        while (reader.Read())
            Console.WriteLine(
                $" [{reader["Id"]}] {reader["Name"]} | " +
                $"{reader["Position"]} | {reader["Salary"]}");
    }

    static void ExecuteNonQuery(SqlConnection conn, string sql)
    {
        using var cmd = new SqlCommand(sql, conn);
        cmd.ExecuteNonQuery();
    }
}
