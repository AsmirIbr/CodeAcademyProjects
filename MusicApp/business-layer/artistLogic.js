import { ArtistRepository } from "/repositories/artistRepository.js";
import { AlbumRepository } from "/repositories/albumRepository.js";
import { SearchArtist } from "/repositories/searchArtist.js";

export function ArtistLogic() {
    this.artistRepo = new ArtistRepository();
    this.albumRepo = new AlbumRepository();
    this.artistSearchDepo = new SearchArtist();
    this.enterCharacters = [];

    this.getArtistPageData = async function (artistName) {

        var artist = await this.artistRepo.getArtist(artistName);
        var topAlbums = await this.artistRepo.getTopAlbums(artistName);
        var albums = await this.albumRepo.getAlbums(artistName, topAlbums);

        var pageData = {
            artist: artist,
            albums: albums,
        }

        console.log(artist);
        return pageData;
    }

    this.getSearchedArtist = async function (artist) {

        this.enterCharacters.push(artist);

        var getArtist = await this.artistSearchDepo.searchArtist(this.enterCharacters.join("").toString());
        return getArtist;



        console.log("logic search", this.enterCharacters.join("").toString());



    }
}