export default function scrollWithOffset(el: HTMLElement)  {
    const yOffset = -60;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
};