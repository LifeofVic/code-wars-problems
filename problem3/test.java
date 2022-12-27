public class Kata{

  public static int grow(int[] x){
  int sum = 1;
    for (int i =0; i<x.length;i++){
      sum = sum * x[i];
    }
    return sum;
  
  }

}