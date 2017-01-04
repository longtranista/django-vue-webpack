from django.http import JsonResponse

def foo(request):
    """
    Amazing Example...
    :param request:
    :return:
    """
    return JsonResponse({
        'foo': 'bar'
    })
