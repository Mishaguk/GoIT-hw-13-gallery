import apiService from './services/apiService.js'
import li_items from '../templates/li_items.hbs'
import toastr, { error, success } from 'toastr'
import 'toastr/build/toastr.min.css';

toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: 'toast-top-right',
    preventDuplicates: false,
    onclick: null,
    showDuration: '300',
    hideDuration: '1000',
    timeOut: '3000',
    extendedTimeOut: '1000',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut',
  };


const refs = {
    searchForm: document.querySelector('#search-form'),
    gallery: document.querySelector('#gallery'),
    btnLoadMore : document.querySelector('#load-more-btn') 

}

refs.searchForm.addEventListener('submit', searchFormSubmit)
refs.btnLoadMore.addEventListener('click', loadMoreBtn)



function searchFormSubmit(e) {
    e.preventDefault();

    const inputValue = e.currentTarget.elements.query.value;

    clearListItems()

    apiService.resetPage();
    apiService.searchQuery = inputValue;
    
    

    apiService.fetchArticles().then(data => {
        
        const markup = buildListItems(data.hits)

        insertListItems(markup);
    })

    if(searchFormSubmit = success) {
        toastr.success('Запрос обработан успешно!')
    } else {
        toastr.error(error);
    };

    
}



function loadMoreBtn() {
    
    apiService.fetchArticles().then(data => {
        
        const markup = buildListItems(data.hits)
        
        insertListItems(markup)
    })
}


function insertListItems(items) {
    refs.gallery.insertAdjacentHTML('beforeend', items)

}

function buildListItems(items) {
    return li_items(items)
}


function clearListItems() {
    refs.gallery.innerHTML = '';
}
