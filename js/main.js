$(function () {
    
    // AUTH
    var github = new Github({
      token: "e693d2265de53b2d6a3bc8e1d881f9438e2a54d9",
      auth: "oauth"
    });

    // REPO
    var repo = github.getRepo('petrosh', 'gistize');
    
    // COMMITS
    repo.getCommits({ 'path': 'docs/'}, function(err, sha) {
        $.each( sha , function ( index, value) {
            $('#out').append( index, value.sha, ' - ' );
        });
    });
    
    $('#submitfilename').click( function (e){
        e.preventDefault();
        var filename = $('#filename').val();
        repo.write('gh-pages', 'docs/' + filename + '.md', 'YOUR_NEW_CONTENTS', 'YOUR_COMMIT_MESSAGE', function(err) {});
    })

    $('#submitsha').click( function (e){
        e.preventDefault();
        var sha = $('#sha').val();
        
        repo.getCommits({ 'sha': sha}, function(err, commit) {
            $.each( commit , function ( index, value) {
                $('#out').append( value, ' - ' );
                console.log(value)
            });
        });
        
    })


});