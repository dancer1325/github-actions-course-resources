# Use official Node image (https://hub.docker.com/_/python), instead of using some OS, and installing afterwards the dependencies
FROM python:3

# ADD or COPY have got similar functionality
# COPY SourcePath DestinyPath
COPY requirements.txt /requirements.txt

# Run the command in the file system
# Install packages based on requirement file
RUN pip install -r requirements.txt

# ADD or COPY have got similar functionality
# COPY SourcePath DestinyPath
COPY deployment.py /deployment.py

# Command what it's going to be executed at start the container
CMD ["python", "/deployment.py"]
# 1) If there is no ENTRYPOINT defined --> Command what it's going to be executed at start the container
# 1) If there is ENTRYPOINT defined --> Arguments of the start up