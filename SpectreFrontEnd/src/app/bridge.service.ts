import { Posting } from './posting.model';

export class BridgeService{
    private posts: Posting[] = [];

    getPosting(){
        return this.posts;
    }
}