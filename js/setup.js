//PURE.js template init
var directive = {
    'article':{
        'mulher<-mulheres':{
            'h3': 'mulher.name',

            '.tags li':{
                'tag<-mulher.interests':{
                    '.': 'tag'
                }
            },

            '.location': 'mulher.location',
            'img.photo@alt': 'mulher.name',
            'img.photo@src': function(){
                return this.photo || generateGravatarUrl(this.email);
            },
            '.fb a@href': 'https://facebook.com/#{mulher.fb}',
            '.fb@class': function(){
                return this.fb ?  "" : "hidden";
            },
            '.twitter a@href': 'https://twitter.com/#{mulher.twitter}',
            '.twitter @class': function(){
                return this.twitter ?  "" : "hidden";
            },
            '.github a@href': 'https://github.com/#{mulher.github}',
            '.github @class': function(){
                return this.github ?  "" : "hidden";
            },
            '.linkedin a@href': 'https://www.linkedin.com/in/#{mulher.linkedin}',
            '.linkedin @class': function(){
                return this.linkedin ?  "" : "hidden";
            },
            '.behance a@href': 'https://www.behance.net/#{mulher.behance}',
            '.behance @class': function(){
                return this.behance ?  "" : "hidden";
            },
            '.site a@href': '#{mulher.site}',
            '.site @class': function(){
                return this.site ?  "" : "hidden";
            }
        }
    }
};

$(function(){
    $.get("mulheres.json", {crossDomain: true}, function(data) {
        $p('main').render(data, directive);
    });
    $('#build').remove();
});

function generateGravatarUrl(email){
    var hash = md5(email);
    var placeholderImagePath = "http://insideoutproject.xyz/mulheres-palestrantes/img/placeholder-female.jpg";
    var imageURL = "https://secure.gravatar.com/avatar/" + hash + "?r=PG&d=" + placeholderImagePath;
    return email ? imageURL : placeholderImagePath;
};
