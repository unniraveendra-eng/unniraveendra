/**
 * UNNIRAVEENDRA AUTHOR WEBSITE - INTERACTIVE SCRIPTS
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Navigation Toggle
    const menuBtn = document.querySelector('.menu');
    const navLinks = document.querySelector('.links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            menuBtn.setAttribute('aria-expanded', String(isOpen));
            menuBtn.innerHTML = isOpen ? 'Close ✕' : 'Menu ☰';
        });

        // Close nav when clicking link on mobile
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('open')) {
                    navLinks.classList.remove('open');
                    menuBtn.setAttribute('aria-expanded', 'false');
                    menuBtn.innerHTML = 'Menu ☰';
                }
            });
        });
    }

    // 2. Copyright Year Auto-update
    document.querySelectorAll('[data-year]').forEach(el => {
        el.textContent = new Date().getFullYear();
    });

    // 3. Dynamic Gallery Lightbox Modal
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalClose = document.querySelector('.modal-close');

    if (modal && modalImg) {
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                const title = item.querySelector('.gallery-title')?.textContent || 'Gallery Photo';
                if (img) {
                    modalImg.src = img.src;
                    modalImg.alt = img.alt || title;
                    if (modalTitle) modalTitle.textContent = title;
                    modal.classList.add('open');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        const closeModal = () => {
            modal.classList.remove('open');
            document.body.style.overflow = '';
        };

        if (modalClose) modalClose.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('open')) {
                closeModal();
            }
        });
    }

    // 4. Excerpt Reader Modal Interactivity
    const excerptModal = document.getElementById('excerpt-modal');
    const excerptBtns = document.querySelectorAll('[data-open-excerpt]');
    const excerptClose = document.querySelector('.excerpt-close');

    if (excerptModal) {
        excerptBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                excerptModal.classList.add('open');
                document.body.style.overflow = 'hidden';
            });
        });

        const closeExcerpt = () => {
            excerptModal.classList.remove('open');
            document.body.style.overflow = '';
        };

        if (excerptClose) excerptClose.addEventListener('click', closeExcerpt);
        excerptModal.addEventListener('click', (e) => {
            if (e.target === excerptModal) closeExcerpt();
        });
    }

    // 5. Back to Top Scroll
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});