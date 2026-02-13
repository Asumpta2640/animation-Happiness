import os
import sys

def get_user_folder():
    folder_path = input("Enter the path of the folder you want to organize: ")
    print(folder_path)
    isdir = os.path.isdir(folder_path)

    if not isdir:
        print("The path you entered is not a valid directory. Please try again.")
        sys.exit()

    return folder_path
    #return it exit a function
    #sys.exit() exit the program if the path is not valid