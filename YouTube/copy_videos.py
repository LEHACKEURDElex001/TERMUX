import shutil
import os

# Chemins des dossiers (à modifier selon tes besoins)
source_folder = "/sdcard/Videos"  # Dossier source
destination_folder = "/sdcard/Backup_Videos"  # Dossier de destination

# Vérifier si le dossier de destination existe, sinon le créer
if not os.path.exists(destination_folder):
    os.makedirs(destination_folder)

# Extensions des fichiers vidéo à copier
video_extensions = (".mp4", ".avi", ".mkv", ".mov", ".flv")

# Copier les vidéos
for file_name in os.listdir(source_folder):
    if file_name.endswith(video_extensions):
        source_path = os.path.join(source_folder, file_name)
        destination_path = os.path.join(destination_folder, file_name)
        
        shutil.copy2(source_path, destination_path)
        print(f"✅ Copié : {file_name}")

print("🎉 Copie terminée !")
