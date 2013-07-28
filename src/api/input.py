class Input(dict):
    def __init__(self, request):
        self.request = request
        self.raw_input = request.GET.copy()
        self.raw_input.update(request.POST)
        path = request.path.lower()
        path_components = path.split('/')[2:]
        method_components = path_components[0].split('.')

        self.service_name = path_components[0]
        self.output_format = method_components[-1]
        self.action_name = method_components[0]

        print request

    def __str__(self):
        return str(self.__dict__)