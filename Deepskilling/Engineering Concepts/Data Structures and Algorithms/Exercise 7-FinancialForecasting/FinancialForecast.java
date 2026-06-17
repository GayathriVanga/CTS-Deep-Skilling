import java.util.Scanner;

class FinancialForecast {

    static double futureValue(double amount, double rate, int years) {

        // Base case
        if (years == 0)
            return amount;

        // Recursive case
        return futureValue(amount, rate, years - 1) * (1 + rate);
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Present Value: ");
        double amount = sc.nextDouble();

        System.out.print("Enter Growth Rate (%): ");
        double rate = sc.nextDouble() / 100;

        System.out.print("Enter Number of Years: ");
        int years = sc.nextInt();

        double result = futureValue(amount, rate, years);

        System.out.printf("Future Value after %d years = %.2f",
                          years, result);

        sc.close();
    }
}