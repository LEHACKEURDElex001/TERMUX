def calculatrice():
    while True:
        try:
            expression = input("Entrez votre calcul (ou 'exit' pour quitter) : ")
            if expression.lower() == "exit":
                print("Fermeture de la calculatrice.")
                break
            resultat = eval(expression)
            print(f"Résultat : {resultat}")
        except Exception as e:
            print(f"Erreur : {e}")

calculatrice()
