import "dart:io";

void main (){
  dynamic name = "hus";
  print(name);

  const ha = "hussain";
  print(ha);

  print("Enter your name :");

  String? nameInput = stdin.readLineSync();

  print("Enter age name :");

  String? ageInput = stdin.readLineSync();

  print(nameInput);
  print(ageInput);



}