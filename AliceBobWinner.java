import java.util.Scanner;
public class AliceBobWinner {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        //int t = scanner.nextInt(); // Number of test cases
            int n = scanner.nextInt(); // Length of the sequence
            int[] sequence = new int[n];
            int sum = 0;
            int oddCount = 0;

            for (int j = 0; j < n; j++) {
                sequence[j] = scanner.nextInt();
                sum += sequence[j];
                if (sequence[j] % 2 != 0) {
                    oddCount++;
                }
            }
            int evenCount = n - oddCount;
            //System.out.println("odd count:"+=)
            if (sum % 2 == 0 ) {
                if(evenCount==n)
                {
                    System.out.println("Alice");
                }
                else
                {
                    if((oddCount/2)%2==0)
                    System.out.println("Alice");
                    else
                    System.out.println("Bob");
                }
            } 
            else {
                if(((oddCount+1)/2)%2==0)
                System.out.println("Alice");
                else
                System.out.println("Bob");
            }
        scanner.close();
    }
}
