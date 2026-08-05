---
description: commit et push automatique vers GitHub
---

// turbo-all

1. Vérifier les fichiers modifiés
```bash
cd "/Users/maximilien/Documents/Maximilien DIGITAL" && git status --short
```

2. Ajouter tous les fichiers modifiés
```bash
cd "/Users/maximilien/Documents/Maximilien DIGITAL" && git add -A
```

3. Committer avec un message horodaté
```bash
cd "/Users/maximilien/Documents/Maximilien DIGITAL" && git commit -m "update: $(date '+%Y-%m-%d %H:%M')"
```

4. Pousser vers GitHub
```bash
cd "/Users/maximilien/Documents/Maximilien DIGITAL" && git push origin main
```
