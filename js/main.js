
$(document).ready(function() {
    $( '.park' ).click( function() {
        var name = $(this).attr('id');
        var imgSrc = '';
        switch(name) {
            case 'allen_park':
                imgSrc = 'AllenPark.JPG';
                break;
            case 'craighead_forest':
                imgSrc = 'CraigheadForestPark.JPG';
                break;
            case 'earl_bell':
                imgSrc = 'EarlBellCommunityCenter.JPG';
                break;
            case 'joe_mack':
                imgSrc = 'JoeMackCampbellPark.JPG';
                break;
            case 'jonesboro_pool':
                imgSrc = 'JonesboroPoolCenter.JPG';
                break;
            case 'miracle_league':
                imgSrc = 'MiracleLeagueParkConceptual.jpg';
                break;
            case 'parker_park':
                imgSrc = 'ParkerParkCommunityCenter.JPG';
                break;
            case 'southside_softball':
                imgSrc = 'SouthsideSoftballComplex.JPG';
                break;
        }
        $('#park_image').html("<img src='imgs/" + imgSrc + "'>");

    });
});
