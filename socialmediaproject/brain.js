(function () {


    // var addcontent__ = document.querySelector('.flex-box_');
        // console.log(addcontent__);
    function User(user_username, user_descrip, User_checkbox) {
        this.username = user_username;
        this.description = user_descrip;
        this.checkbox = User_checkbox;
        this.like = 0;
        this.follow = 0;
    }

    const form = document.querySelector('#data-submit');

    //Set up Submit Button
    // console.log(form)
    form.addEventListener('submit', function (e) {
        // prevent the form's default submission action
        console.log(e.target);
        e.preventDefault()

        let username_ = document.querySelector('#user-data');
        let description_ = document.querySelector('#textarea');
        let checkbox = document.querySelector('#checkbox-check');


        let user = new User(username_.value, description_.value, checkbox.checked);
        // console.log(user);

        append_cards(user);

    })


    function append_cards(user) {

        


        let card_div = document.createElement('div');
        card_div.setAttribute('class', 'cards');

        let post_div = document.createElement('div');
        post_div.setAttribute('id', 'post');

        card_div.appendChild(post_div);

        let image = document.createElement('img');
        image.setAttribute('src', 'zenstsu.jpg');
        image.setAttribute('alt', 'profile Image');
        image.setAttribute('id', 'profile-picture');

        post_div.appendChild(image);

        let information = document.createElement('div');
        information.setAttribute('id', 'information')

        card_div.appendChild(information);

        let username__ = document.createElement('h1');
        username__.textContent = user.username;
        username__.setAttribute('id', 'username');

        information.appendChild(username__);

        let user_bio = document.createElement('p');
        user_bio.textContent = user.description;
        user_bio.setAttribute('id', 'description');

        information.appendChild(user_bio);

        let like_button_ = document.createElement('a');
        let follow_button_ = document.createElement('a');

        like_button_.textContent = "like ";
        follow_button_.textContent = "follow ";

        like_button_.setAttribute('href', '#');
        follow_button_.setAttribute('href', '#');

        like_button_.setAttribute('class', 'btn btn-dark btn-lg like-button');
        follow_button_.setAttribute('class', 'btn btn-dark btn-lg follow-button');



        let like_count = document.createElement('span');
        like_count.setAttribute('id', 'like_count');
        let follow_count = document.createElement('span');
        follow_count.setAttribute('id', 'follow_count');

        like_button_.insertAdjacentElement('afterbegin', like_count);
        follow_button_.insertAdjacentElement('afterbegin', follow_count);

        let like_icon = document.createElement('i');
        let follow_icon = document.createElement('i');

        like_icon.setAttribute('class', 'far fa-thumbs-up');
        follow_icon.setAttribute('class', 'fas fa-bookmark');

        like_button_.insertAdjacentElement('beforeend', like_icon);
        follow_button_.insertAdjacentElement('beforeend', follow_icon);


        information.appendChild(like_button_);
        information.appendChild(follow_button_);

        

        if (user.checkbox === true) {
            const addcontent__ = document.querySelector('.flex-box_');
            console.log(addcontent__)
            if(addcontent__ !== null)
            addcontent__.appendChild(card_div);
            else
            alert("fuck Offf! You messed up all good things...");

            alert("You created your profile Successfully!");
            
        }
        else {
            alert('Please accpet terms and conditions!');
            user.username.value = "";
            user.description.value = "";
            card_div.style.display = "none";
        }

    }



    const information = document.querySelector('#information');
    console.log(information);
    const User_likes = document.querySelector('#like_count');
    const User_follow = document.querySelector('#follow_count');
    information.addEventListener('click', function (e) {
        e.preventDefault()
        // console.log("hmm")
        if (e.target.classList[0] === "like-button") {
            // console.log("yes")
            user.like_ = user.like_ + 1;
            User_likes.textContent = user.like_ + " ";
        }
        else if (e.target.classList[0] === "follow-button") {
            // console.log("yes")
            user.follow = user.follow + 1;
            User_follow.textContent = user.follow + " ";
        }
    })

})()
