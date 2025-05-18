<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Post;
use App\Models\Comment;
use App\Models\PostLike;
use App\Models\PostView;
use App\Models\PostReaction;
use App\Models\CommentLike;
use App\Models\Share;
use App\Models\Friendship;
use App\Models\UserBlock;
use App\Models\UserFollow;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        //User::factory(5)->create();


        // $user = User::factory(5)->withPosts()
        //                         ->withComments()
        //                         ->withCommentLikes()
        //                         ->withPostReactions()
        //                         ->withPostViews()
        //                         ->withShares()
        //                         ->withProfile()
        //                         ->withSettings()
        //                         ->withPrivacySettings()
        //                         ->create();



        $users = User::factory(4)->withSettings()
                                 ->withProfile()
                                 ->withPrivacySettings()
                                 ->create();

        $user = $users[0];
        $user2 = $users[1];
        $user3 = $users[2];
        $user4 = $users[3];

        $post = Post::factory()->create([
            'user_id' => $user->id,
        ]);
        $post2 = Post::factory()->create([
            'user_id' => $user2->id,
        ]);
        $post3 = Post::factory()->create([
            'user_id' => $user4->id,
        ]);

        $comment = Comment::factory()->create([
            'user_id' => $user->id,
            'post_id' => $post2->id,
        ]);
        $comment2 = Comment::factory()->create([
            'user_id' => $user2->id,
            'post_id' => $post->id,
        ]);
        $comment3 = Comment::factory()->create([
            'user_id' => $user3->id,
            'post_id' => $post->id,
        ]);
        
        CommentLike::factory()->create([
            'user_id' => $user->id,
            'comment_id' => $comment2->id,
        ]);
        CommentLike::factory()->create([
            'user_id' => $user2->id,
            'comment_id' => $comment->id,
        ]);
        CommentLike::factory()->create([
            'user_id' => $user->id,
            'comment_id' => $comment->id,
        ]);
        CommentLike::factory()->create([
            'user_id' => $user3->id,
            'comment_id' => $comment->id,
        ]);

        Comment::factory()->create([
            'user_id' => $user->id,
            'post_id' => $post->id,
            'parent_comment_id' => $comment2->id,
        ]);

        PostView::factory()->create([
            'user_id' => $user->id,
            'post_id' => $post2->id,
        ]);
        PostView::factory()->create([
            'user_id' => $user2->id,
            'post_id' => $post->id,
        ]);
        PostView::factory()->create([
            'user_id' => $user4->id,
            'post_id' => $post->id,
        ]);

        PostReaction::factory()->create([
            'user_id' => $user->id,
            'post_id' => $post2->id,
        ]);
        PostReaction::factory()->create([
            'user_id' => $user2->id,
            'post_id' => $post->id,
        ]);
        PostReaction::factory()->create([
            'user_id' => $user4->id,
            'post_id' => $post->id,
        ]);

        Share::factory()->create([
            'user_id' => $user->id,
            'post_id' => $post2->id,
        ]);
        Share::factory()->create([
            'user_id' => $user2->id,
            'post_id' => $post->id,
        ]);

        Friendship::factory()->create([
            'user_id' => $user->id,
            'friend_id' => $user2->id,
            'action_user_id' => $user->id,
            'status' => 'accepted',
        ]);
        Friendship::factory()->create([
            'user_id' => $user2->id,
            'friend_id' => $user->id,
            'action_user_id' => $user->id,
            'status' => 'accepted',
        ]);

        Friendship::factory()->create([
            'user_id' => $user4->id,
            'friend_id' => $user2->id,
            'action_user_id' => $user->id,
            'status' => 'pending',
        ]);
        Friendship::factory()->create([
            'user_id' => $user2->id,
            'friend_id' => $user3->id,
            'action_user_id' => $user->id,
            'status' => 'pending',
        ]);

        UserBlock::factory()->create([
            'blocker_id' => $user->id,
            'blocked_id' => $user3->id,
        ]);
        UserBlock::factory()->create([
            'blocker_id' => $user3->id,
            'blocked_id' => $user->id,
        ]);

        UserFollow::factory()->create([
            'follower_id' => $user->id,
            'followed_id' => $user2->id,
        ]);
        UserFollow::factory()->create([
            'follower_id' => $user2->id,
            'followed_id' => $user->id,
        ]);
        UserFollow::factory()->create([
            'follower_id' => $user2->id,
            'followed_id' => $user3->id,
        ]);


        // foreach ($users as $user) {
        //     $posts = Post::factory(5)->create([
        //         'user_id' => $user->id,
        //     ]);
        //     foreach ($posts as $post) {
        //         $
        //     }
        // }

        



        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
