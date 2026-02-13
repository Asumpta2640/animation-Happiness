import os
import shutil

def list_folder_files(folder_path):
    files=os.listdir(folder_path)
    return files

    def move-files(working_dir,filename,folder_name):
        destination_path=os.path.join(working_dir,folder_name)

        source=os.path.join(working_dir,filename)
       # print("Moving the file to",destination_path

        isdir=os.path.isdir(destination_path)

        if not isdir:
            os.makedirs(destination_path)
            print(f"For file {filename}")
            print(f"Will be moved from {source}")
            print(f"to {destination_path}")

        if prompt:
            print("")
            print("reply with following")
            print("y or Y for Yes;move file")
            print("n or N for No:Dont Move File")
            to_move=import("Answer").lower().strip()

            if to_move="y":
                shutil.move(src=source,dst=destination_path)
                return
            print("File not moved",filename)
        shutil.move(src=source,dst=destination_path)