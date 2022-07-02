cmake_minimum_required(VERSION 3.16)

project(executable)

add_executable(executable main.c)

add_library(lib1
    lib1/foo.c
    lib1/bar.c
)

add_library(lib2
    lib2/submodule1/foo.c
    lib2/submodule2/bar.c
)

target_link_libraries(executable
    PRIVATE
        lib1
        lib2
)

set_target_properties(executable 
    PROPERTIES
        SUFFIX ".elf"
)

target_link_options(executable
    PRIVATE
        -Wl,-Map=executable.map
)
