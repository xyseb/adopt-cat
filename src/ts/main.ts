console.log('Hello from typescript !');

// Feature d'ajout d'un magic-cat
function displayMagicCat(): void {
    console.log('displayMagicCat called')
    const magicCatElement: HTMLElement | null = document.getElementById('magic-cat');

    if (magicCatElement && magicCatElement.style.bottom !== '-200px') {
        magicCatElement.style.bottom = '0';
        setTimeout(() => {
            magicCatElement.style.bottom = '';
        }, 2000);
    }
}

// Feature d'ajout d'un raccourci clavier
let dialog: HTMLDialogElement | null = document.querySelector('dialog');
if (dialog !== null) {
    dialog.onkeyup = function(e: KeyboardEvent) {
        if (e.ctrlKey && e.metaKey && e.key === 'Escape') {
          dialog?.close();
        }
    }
}
else console.error('aucun element <dialog> trouvé dans le document !')