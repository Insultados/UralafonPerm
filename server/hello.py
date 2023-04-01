import requests
from config import token
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin


group_name = 'uralafonofficial'

application = Flask(__name__)
CORS(application, support_credentials=True)


def get_wall_posts(group_name):
    url = f'https://api.vk.com/method/wall.get?domain={group_name}&count40&access_token={token}&v=5.84'
    request = requests.get(url)

    return request.json()


def get_wall_text(posts, post_num):

    post_text = ['']

    for i in (posts['response']['items'][post_num]['text']):
        post_text[0] += i

    return post_text[0].split('\n')


def get_wall_img(posts, post_num):

    post_img_url = None

    try:
        post_img_url = (posts['response']['items'][post_num]
                        ['attachments'][0]['photo']['sizes'][3]['url'])
    except:
        print('img is not found')

    return post_img_url


@application.route('/api/', methods=['GET', 'OPTIONS'])
@cross_origin(supports_credentials=True)
def get():
    post_count = 5
    posts = get_wall_posts(group_name)
    post_list_text = [get_wall_text(posts, i) for i in range(post_count)]
    post_list_img = [get_wall_img(posts, i) for i in range(post_count)]
    return jsonify({'posts': post_list_text, 'img': post_list_img})


if __name__ == "__main__":
    application.run(debug=True, port='5000')
