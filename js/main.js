$(function () {
    
    var github = new Github({
      token: "e693d2265de53b2d6a3bc8e1d881f9438e2a54d9",
      auth: "oauth"
    });

    var repo = github.getRepo('petrosh', 'gistize');

    repo.show(function(err, repo) {
        $('#out').append(repo.git_commits_url);
    });
    
    $('#submitfilename').click( function (e){
        e.preventDefault();
        var filename = $('#filename').val();
        repo.write('gh-pages', 'docs/' + filename + '.md', 'YOUR_NEW_CONTENTS', 'YOUR_COMMIT_MESSAGE', function(err) {});
    })

});