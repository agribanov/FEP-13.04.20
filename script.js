function createExp(code) {
    return new RegExp(`\\${code}\\d{9}`, 'g');
}
const phoneRegExp = new RegExp('+380d{9}', 'g');

// /\+380\d{9}/g;


// 'Name: Alex'

/<li class="product-name">([a-z A-Z]{3, })<\/li>/

<li class="product-name">Super Product</li>