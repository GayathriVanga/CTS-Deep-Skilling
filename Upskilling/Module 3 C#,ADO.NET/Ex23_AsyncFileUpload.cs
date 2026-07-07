using System;
using System.Threading.Tasks;

class Program
{
    static async Task<string> UploadFileAsync(string fileName)
    {
        Console.WriteLine($"Uploading {fileName}...");
        await Task.Delay(3000);
        if (fileName.Contains("bad"))
            throw new InvalidOperationException("Upload failed: invalid file.");
        return $"{fileName} uploaded successfully!";
    }

    static async Task Main()
    {
        foreach (var file in new[] { "report.pdf", "bad_file.exe" })
        {
            try
            {
                string result = await UploadFileAsync(file);
                Console.WriteLine(result);
            }
            catch (InvalidOperationException ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }
        }
    }
}
