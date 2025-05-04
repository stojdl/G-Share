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

        $users = User::factory(5)->withSettings()
                                 ->withProfile()
                                 ->withPrivacySettings()
                                 ->create();

        $posts = Post::factory(5)->create([
            'user_id' => $users[0]->id,
        ]);
        $posts2 = Post::factory(5)->create([
            'user_id' => $users[1]->id,
        ]);
        $posts3 = Post::factory(5)->create([
            'user_id' => $users[2]->id,
        ]);

        $comment = Comment::factory()->create([
            'user_id' => $users[0]->id,
            'post_id' => $posts2[0]->id,
        ]);
        $comment2 = Comment::factory()->create([
            'user_id' => $users[1]->id,
            'post_id' => $posts[0]->id,
        ]);
        $comment3 = Comment::factory()->create([
            'user_id' => $users[3]->id,
            'post_id' => $posts3[0]->id,
        ]);

        $commentLike = CommentLike::factory()->create([
            'user_id' => $users[4]->id,
            'comment_id' => $comment->id,
        ]);

        $commentLike2 = CommentLike::factory()->create([
            'user_id' => $users[4]->id,
            'comment_id' => $comment2->id,
        ]);

        $postLike = PostLike::factory()->create([
            'user_id' => $users[4]->id,
            'post_id' => $posts[0]->id,
        ]);
        $postLike2 = PostLike::factory()->create([
            'user_id' => $users[4]->id,
            'post_id' => $posts2[0]->id,
        ]);

        $postView = PostView::factory()->create([
            'user_id' => $users[4]->id,
            'post_id' => $posts[0]->id,
        ]);
        $postView2 = PostView::factory()->create([
            'user_id' => $users[3]->id,
            'post_id' => $posts[0]->id,
        ]);
        $postView3 = PostView::factory()->create([
            'user_id' => $users[4]->id,
            'post_id' => $posts[1]->id,
        ]);

        $postReaction = PostReaction::factory()->create([
            'user_id' => $users[4]->id,
            'post_id' => $posts[0]->id,
        ]);
        $postReaction2 = PostReaction::factory()->create([
            'user_id' => $users[3]->id,
            'post_id' => $posts[0]->id,
        ]);
        $postReaction3 = PostReaction::factory()->create([
            'user_id' => $users[4]->id,
            'post_id' => $posts[1]->id,
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
