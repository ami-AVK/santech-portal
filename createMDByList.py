import os

# List of file names
file_names = ["на воду","на вход и на въезд","на вывоз ТМЦ","на ночную стоянку","на парковку личного транспорта","на курьера или экспресс-службу","на подъем договоров и документов из архива","на печати и штампы","на ремонт канализации, электроснабжение, водоснабжение, отопление ","на канцтовары, хоз товары на тару и упаковку на переезд, перемещение, организацию рабочего места (мебель)"]

# Loop through the list of file names
for file_name in file_names:
    # Create a new Markdown file with the file name as the title
    with open(file_name.rstrip() + '.md', 'w') as f:
        f.write("---\n")
        f.write('title: ' + file_name.rstrip()+ "\n")
        f.write('category: Заявки' + "\n")
        f.write(f'tags: ["{file_name.rstrip()}"]' +"\n")
        f.write("---\n")
        f.write('# ' + file_name.rstrip()+ "\n")