function Main(){

  var _navListWorksElement;
  var _navListWorksItems;
  var _navListSetdesignsElement;
  var _navListSetdesignsItems;
  var _navListEditorialsElement;
  var _navListEditorialsItems;
  var _navLinksWorks;
  var _navLinksSetdesign;
  var _mobilemenuButton;
  var _nav;
  var _navList;
  var _navArrow;
  var _contactButton;
  var _contactContainer;

  var _navListWorksAllLink;
  var _navListSetdesignAllLink;

  var _worksGalleryItems;
  var _setdesignGalleryItems;

  var _contentContainer;


  var _caseContainer;
  var _caseOutput;

  var _galleryLinksWorks;
  var _galleryLinksSetdesigns;

	function init() {

    _navList = document.querySelector('.nav-list');

    

    _navListEditorialsItems = [];
    _navListWorksItems = [];
    _navListSetdesignsItems = [];
    _navListEditorialsElement = document.querySelector('.nav-list-editorials');
    _navListWorksElement = document.querySelector('.nav-list-works');
    _navListSetdesignsElement = document.querySelector('.nav-list-setdesigns');
    _caseContainer = document.querySelector('.case');
    _mobilemenuButton = document.querySelector('.mobilemenu-button');
    _nav = document.querySelector('.nav');
    _navArrow = document.querySelector('.nav-arrow');
    _contactButton = document.querySelector('.nav-listItem-contact');
    _contactContainer = document.querySelector('.contact');

    _worksGalleryItems = [];
    _gallery = document.querySelector('.gallery');

    _contentContainer = document.querySelector('.content');
   

  
    // createEditorialsList();
    // createWorksList();
    // createSetdesignsList();

    createNav();

    _mobilemenuButton.addEventListener('click', toggleMobilemenu);
    _contactButton.addEventListener('click', displayContactPage);

    window.addEventListener('scroll', desktopScrollNav);
    // window.addEventListener('resize', resizeNav);

    
  }


  function createNav(){

    var _allNavItems = [];

    
    
    // Building editoral submenu
    var _editorialsItem;
    _allNavItems.push('<li class="nav-listItem-heading nav-listItem-heading--editorials">Editorials</li>');
    _allNavItems.push('<ul>');
    for(var i = 0; i < 5; i++){
      _editorialsItem = '<li class="nav-listItem nav-listItem-editorials" data-id=' + _editorialsArray[i].id + '>' + _editorialsArray[i].title + '</li>';
      _allNavItems.push(_editorialsItem);
    }
    _allNavItems.push('<li class="nav-listItem nav-listItem-editorials nav-listItem-editorials-all">View all... <img src="assets/images/arrowright.png" class="nav-arrow"></li>');
    _allNavItems.push('</ul>');

    // Building setdesigns submenu
    var _setdesignsItem;
    _allNavItems.push('<li class="nav-listItem-heading nav-listItem-heading--setdesigns">Setdesigns</li>');
    _allNavItems.push('<ul>');
    for(var i = 0; i < 5; i++){
      _setdesignsItem = '<li class="nav-listItem nav-listItem-setdesigns" data-id=' + _setdesignsArray[i].id + '>' + _setdesignsArray[i].title + '</li>';
      _allNavItems.push(_setdesignsItem);
    }
    _allNavItems.push('<li class="nav-listItem nav-listItem-setdesigns nav-listItem-setdesigns-all">View all... <img src="assets/images/arrowright.png" class="nav-arrow"></li>');
    _allNavItems.push('</ul>');



    _navList.insertAdjacentHTML('beforeend', _allNavItems.join(''));

  }

  function resizeNav(){
    if(window.innerWidth < 769){
      /* Issue with menu styling on resize... "solving" it by reloading page/css.. */
      window.location.reload(false);
      // _nav.style.position='absolute';
      // _nav.style.top=60 + 'px';
    }
    if(window.innerWidth > 769){
      window.location.reload(false);
      // _nav.style.position='absolute';
      // _nav.style.top=50 + 'vh';
    }
  }

  function desktopScrollNav(){
    if(window.innerWidth > 769){
      if(window.scrollY > 284){
        _nav.style.position='fixed';
        _nav.style.top=60 + 'px';
      }
      if(window.scrollY < 284){
        _nav.style.position='absolute';
        _nav.style.top=50 + 'vh';
      }
    }
  }

  


  function toggleMobilemenu(){
    _nav.classList.toggle('nav--show');
    _nav.classList.contains('nav--show') ? _navArrow.src='assets/images/arrowup.png' : _navArrow.src='assets/images/arrowdown.png';

  }

  var baz = function() { return "foo"; } 



  function showAllWorks(){
    /* Clear content container */
    _contentContainer.innerHTML = '';

    /* Create gallery container */
    var _gallery = document.createElement('div');
    _gallery.classList.add('gallery');
    _contentContainer.appendChild(_gallery);

    _worksGalleryItems = [];
    var _work;
    for(var i = 0; i < _worksArray.length; i++){
      _work = '<div class="gallery-item gallery-item-works" data-id="' + _worksArray[i].id + '"><img src="assets/images/' + _worksArray[i].thumb + '" class="gallery-item-image">' + _worksArray[i].title + '</div>';
      _worksGalleryItems.push(_work);
    }
    _gallery.insertAdjacentHTML('beforeend', _worksGalleryItems.join(''));

    galleryLinks();

  }

  function showAllSetdesigns(){

    _contentContainer.innerHTML = '';

    var _gallery = document.createElement('div');
    _gallery.classList.add('gallery');
    _contentContainer.appendChild(_gallery);

    _setdesignGalleryItems = [];
    var _setdesign;
    for(var i = 0; i < _setdesignArray.length; i++){
      _setdesign = '<div class="gallery-item gallery-item-setdesign" data-id="' + _setdesignArray[i].id + '"><img src="assets/images/' + _setdesignArray[i].thumb + '" class="gallery-item-image">' + _setdesignArray[i].title + '</div>';
      _setdesignGalleryItems.push(_setdesign);
    }
    _gallery.insertAdjacentHTML('beforeend', _setdesignGalleryItems.join(''));

    galleryLinks();

  }


  /******* Creating nav list *******/

  function createEditorialsList(){
    var _editorialsLi;
    for(var i = 0; i < 5; i++){
      _editorialsLi = '<li onClick="baz()" class="nav-listItem nav-listItem-editorials" data-id=' + _editorialsArray[i].id + '>' + _editorialsArray[i].title + '</li>';
      _navListEditorialsItems.push(_editorialsLi);
    }
    _navListEditorialsItems.push('<li class="nav-listItem nav-listItem-editorials nav-listItem-editorials-all">View all... <img src="assets/images/arrowright.png" class="nav-arrow"></li>');
    _navListEditorialsElement.insertAdjacentHTML('beforeend', _navListEditorialsItems.join(''));
  }

  function createWorksList(){
    // var _worksLi;
    // for(var i = 0; i < 5; i++){
    //   _worksLi = '<li class="nav-listItem nav-listItem-works" data-id=' + _worksArray[i].id + '>' + _worksArray[i].title + '</li>';
    //   _navListWorksItems.push(_worksLi);
    // }
    _navListWorksItems.push('<li class="nav-listItem nav-listItem-works nav-listItem-works-all">View all... <img src="assets/images/arrowright.png" class="nav-arrow"></li>');
    _navListWorksElement.insertAdjacentHTML('beforeend', _navListWorksItems.join(''));
  }

  function createSetdesignsList(){
    var _setdesignsLi;
    for(var i = 0; i < 5; i++){
      _setdesignsLi = '<li class="nav-listItem nav-listItem-setdesign" data-id=' + _setdesignArray[i].id + '>' + _setdesignArray[i].title + '</li>';
      _navListSetdesignsItems.push(_setdesignsLi);
    }
    _navListSetdesignsItems.push('<li class="nav-listItem nav-listItem-setdesign nav-listItem-setdesign-all">View all... <img src="assets/images/arrowright.png" class="nav-arrow"></li>');
    _navListSetdesignsElement.insertAdjacentHTML('beforeend', _navListSetdesignsItems.join(''));

    // navLinks();
  }

  function navLinks(){

    _navLinksEditorials = document.querySelectorAll('.nav-listItem-editorials');
    for(var i = 0; i < _navLinksEditorials.length; i++){
      // _navLinksEditorials[i].addEventListener('click', displayEditorial);

      // console.log(_navLinksEditorials[i].dataset.id);

      let _dataSetId = _navLinksEditorials[i].dataset.id;

      _navLinksEditorials[i].addEventListener("click", function(){
        displayCase(_editorialsArray, _dataSetId);
      });
    }


    _navLinksWorks = document.querySelectorAll('.nav-listItem-works');
    for(var i = 0; i < _navLinksWorks.length; i++){
      _navLinksWorks[i].addEventListener('click', displayCase);
    }

    _navLinksSetdesign = document.querySelectorAll('.nav-listItem-setdesign');
    for(var i = 0; i < _navLinksSetdesign.length; i++){
      _navLinksSetdesign[i].addEventListener('click', displayCaseSetdesign);
    }

    _navListWorksAllLink = document.querySelector('.nav-listItem-works-all');
    _navListWorksAllLink.addEventListener('click', showAllWorks);

    _navListSetdesignAllLink = document.querySelector('.nav-listItem-setdesign-all');
    _navListSetdesignAllLink.addEventListener('click', showAllSetdesigns);
  }

  function galleryLinks(){


    _galleryLinksWorks = document.querySelectorAll('.gallery-item-works');
    for(var i = 0; i < _galleryLinksWorks.length; i++){
      _galleryLinksWorks[i].addEventListener('click', displayCase);
    }

    _galleryLinksSetdesigns = document.querySelectorAll('.gallery-item-setdesign');
    for(var i = 0; i < _galleryLinksSetdesigns.length; i++){
      _galleryLinksSetdesigns[i].addEventListener('click', displayCaseSetdesign);
    }

  }



  




  // This function builds and displays a case (editorial, setdesign or work)
  function displayCase(array, id){
    // toggleMobilemenu();

    var _obj = findObjectByKey(array, 'id', id);

    _nav.classList.remove('nav--show');
    _contentContainer.innerHTML = '';
    var _case = document.createElement('div');
    _case.classList.add('case');
    _contentContainer.appendChild(_case);
    _caseOutput = '';

    if(_obj.title){
      _caseOutput += '<p><span class="case-value">' + _obj.title + '</span></p>'
    }
    if(_obj.images){
      for(var j = 0; j < _obj.images.length; j++){
        _caseOutput += '<img src="assets/images/' + _obj.images[j] + '" class="case-image">';
      }
    }
    if(_obj.video){
      _caseOutput += '<iframe width="800" height="533" src="' + _obj.video + '" frameborder="0" allowfullscreen></iframe>'
    }
    if(_obj.desc){
      for(var j = 0; j < _obj.desc.length; j++){
        _caseOutput += '<p><span class="case-key">' + _obj.desc[j][0] + '</span> <span class="case-value">' + _obj.desc[j][1] + '</span></p>'
      }
    }
    if(_obj.text){
      _caseOutput += '<p><span class="case-value">' + _obj.text + '</span></p>'
    }
    _case.insertAdjacentHTML('beforeend', _caseOutput);
  }




  // This function builds and displays contact page
  function displayContactPage(){
    toggleMobilemenu();
    _contentContainer.innerHTML = '';
    var _contact = document.createElement('div');
    _contact.classList.add('contact');
    _contentContainer.appendChild(_contact);
    var _contactOutput;
    _contactOutput = '<span class="contact-heading">Contact</span><p>Installation, set design, curation - Paris & Stockholm</p><p>*telefonnummer*</p><p><a href="*m@ailadress*”_blank">*mail@dress.com*</a></p>';
    _contact.insertAdjacentHTML('beforeend', _contactOutput);
  }




  // Find case object (parameters: case-array, 'id', dataset-id)
  findObjectByKey = (array, key, value) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
  }



  init();
};

window.onload = Main();