<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'username',
        'email',
        'password',
        'premium',
        'last_login',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /**
     * Get the profile associated with the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function profile(): HasOne
    {
        return $this->hasOne(UserProfile::class);
    }

    /**
     * Get the settings associated with the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function settings(): HasOne
    {
        return $this->hasOne(UserSettings::class);
    }

    /**
     * Get the privacy_settings associated with the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function privacy_settings(): HasOne
    {
        return $this->hasOne(UserPrivacySettings::class);
    }

    /**
     * Get all of the posts for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }

    /**
     * Get all of the shares for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function shares(): HasMany
    {
        return $this->hasMany(Share::class);
    }

    /**
     * Get all of the saved_posts_folders for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function saved_posts_folders(): HasMany
    {
        return $this->hasMany(SavedPostsFolder::class);
    }

    /**
     * Get all of the saved_posts for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function saved_posts(): HasMany
    {
        return $this->hasMany(SavedPost::class);
    }

    /**
     * Get all of the comments for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }


    /**
     * Get all of the comment_likes for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function comment_likes(): HasMany
    {
        return $this->hasMany(CommentLike::class);
    }

        /**
     * Get all of the post_views for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function post_views(): HasMany
    {
        return $this->hasMany(PostView::class);
    }

    /**
     * Get all of the post_reactions for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function post_reactions(): HasMany
    {
        return $this->hasMany(PostReaction::class);
    }

    /**
     * The friend that belong to the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function friends(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'friendships', 'user_id', 'friend_id');;
    }

    /**
     * The friendOf that belong to the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function friends_of(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'friendships', 'friend_id', 'user_id');
    }

    /**
     * Get all friends, combining both directions into one collection
     *
     * @return \Illuminate\Support\Collection
     */
    public function all_friends(): Collection
    {
        // Eager load both friends and friendsOf,
        // then merge collections and unique by user id to avoid duplicates
        return $this->friends->merge($this->friends_of)->unique('id')->values();
    }

    /**
     * Get all of the friendship_actions for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function friendship_actions(): HasMany
    {
        return $this->hasMany(Friendship::class, 'action_user_id');
    }

    /**
     * The follows that belong to the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function follows(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'user_follows', 'follower_id', 'followed_id');
    }

    /**
     * The followers that belong to the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function followers(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'user_follows', 'followed_id', 'follower_id');
    }

    /**
     * The blocks that belong to the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function blocks(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'user_blocks', 'blocker_id', 'blocked_id');
    }

    /**
     * The blocked_by that belong to the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function blocked_by(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'user_blocks', 'blocked_id', 'blocker_id');
    }
}
