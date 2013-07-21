class Input(dict):
    def __init__(self, request):
        self.request = request
        self.raw_input = request.GET.copy()
        self.raw_input.update(request.POST)
        path = request.path.lower()
        path_components = path.split('/')[2:]
        method_components = path_components[0].split('.')

    def __str__(self):
        return str(self.__dict__)