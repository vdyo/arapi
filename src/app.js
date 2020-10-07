(function () {
    var AllritesAnalytics = easejs.Class('Stack', {
        'private _playerContainerClass': '.allrites-player',
        'private video_id': null,
        'private _config': {
            token: null,
            client_id: null
        },

        __construct: function (config) {
            this._config = config;
            this._sendServerPing();
            this.initSetup();
            //this._setupMUX();
        },

        'public initSetup': function () {
            var self = this;
            jQuery(document.querySelector(this._playerContainerClass)).on('play', function (e) {
                self.video_id = jQuery(this).data('id');
                self.getVideo(jQuery(this).data('id'), this);
            });
        },

        'public getVideo': function (video_id, vidElement) {
            var self = this;
            jQuery.post("https://content.allrites.com/api/caas/video", {
                token: this._config.token,
                video_id: video_id
            }, function (result) {
                var video = result.data.videoData;
                self._setupMUX(video, vidElement);
            });
        },

        'private _setupMUX': function (video, vidElement) { console.log($(vidElement).attr('class'));
            var self = this;
            if (typeof mux !== 'undefined') {
                mux.monitor('.' + $(vidElement).attr('class'), {
                    debug: true,
                    data: {
                        env_key: 'bmaeeorakrbb93ukg4eojis87', // required
                        viewer_user_id: self._config.client_id,

                        player_name: 'Embed Player', // ex: 'My Main Player'
                        player_version: '1.0.0', // ex: '1.0.0'

                        // Video Metadata (cleared with 'videochange' event)
                        video_id: video.id, // ex: 'abcd123'
                        video_title: video.title, // ex: 'My Great Video'
                        video_duration: video.duration != null ? video.duration * 60000 : 0, // in milliseconds, ex: 120000
                        video_stream_type: 'on-demand', // 'live' or 'on-demand'
                    }
                });
            }
        },
        
        'private _sendServerPing': function () {
            var self = this;
            jQuery.post("https://staging.allrites.com/api/js/ping", {
                token: this._config.token
            }, function (result) {
                console.log(result);
            });
        }       

    });
    window.AllritesAnalytics = AllritesAnalytics;
})();