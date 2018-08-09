# user_auth.auth_backend

import requests
from social_core.backends.oauth import BaseOAuth2
from django_hosts import reverse_host
from tessellate.settings.host import host_settings
from django.conf import settings


class Auth0(BaseOAuth2):
    name = 'auth0'
    SCOPE_SEPARATOR = ' '
    ACCESS_TOKEN_METHOD = 'POST'
    EXTRA_DATA = [
        ('picture', 'picture')
    ]

    def get_key_and_secret(self):
        return host_settings.AUTH0_CREDENTIALS

    def get_domain(self):
        return host_settings.AUTH0_DOMAIN

    def should_prompt(self):
        return self.strategy.request.GET.get('prompt', None) != 'none'

    def auth_params(self, state=None):
        params = super().auth_params(state)

        params['domain'] = self.get_domain()

        if not self.should_prompt():
            params['prompt'] = 'none'

        return params

    def authorization_url(self):
        return f'https://{self.get_domain()}/authorize'

    def access_token_url(self):
        return f'https://{self.get_domain()}/oauth/token'

    def get_user_id(self, details, response):
        return details['user_id']

    def get_user_details(self, response):
        url = f'https://{self.get_domain()}/userinfo'
        token = response['access_token']

        data = requests.get(url, headers={
            'authorization': f'Bearer {token}'
        }).json()

        return {
            'username': data['nickname'],
            'first_name': data['name'],
            'picture': data['picture'],
            'user_id': data['sub'],
            'email': data['email'],
        }

    def get_user_id_token(self, response):
        return response['id_token']
