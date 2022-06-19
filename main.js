let roadmapAnimItems = document.querySelectorAll(".roadmap_list_item");

const offset = (el) => {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.scrollX || document.documentElement.scrollLeft,
    scrollTop = window.scrollY || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
}

if (roadmapAnimItems.length > 0) {
    const animationOnScroll = () => {
        for (let i = 0; i < roadmapAnimItems.length; i++) {
            const item = roadmapAnimItems[i];
            const itemHeight = item.offsetHeight;
            const itemOffset = offset(item).top;
            const animationStart = 4;

            let itemPoint = window.innerHeight - itemHeight / animationStart;

            if (itemHeight > window.innerHeight) {
                itemPoint = window.innerHeight - window.innerHeight / animationStart;
            }

            if ((scrollY > itemOffset - itemPoint) && scrollY < (itemOffset + itemHeight)) {
                item.classList.add("roadmap_list_item_active");
            } else {
                item.classList.remove("roadmap_list_item_active");
            }
        }
    }
}