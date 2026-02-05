document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-navigation');
    
    if(mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
             // Simple toggle for demo purposes
             // In a real WP theme this would toggle a class like 'toggled' on the nav or body
             const isVisible = mainNav.style.display === 'block';
             
             if (isVisible) {
                 mainNav.style.display = 'none';
             } else {
                 mainNav.style.display = 'block';
                 mainNav.style.position = 'absolute';
                 mainNav.style.top = '100%';
                 mainNav.style.left = '0';
                 mainNav.style.width = '100%';
                 mainNav.style.background = '#0b1120';
                 mainNav.style.padding = '20px';
                 mainNav.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
                 
                 // Reset flex direction for mobile
                 const ul = mainNav.querySelector('ul');
                 ul.style.flexDirection = 'column';
                 ul.style.gap = '15px';
             }
        });
    }

    // Sticky Header Effect
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            header.style.background = 'rgba(11, 17, 32, 0.98)';
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
        } else {
            header.style.background = 'rgba(11, 17, 32, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
});
