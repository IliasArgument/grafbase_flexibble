import { ProjectForm } from "@/common.types";
import { getUserQuery, createUserMutation, createProjectMutation, updateProjectMutation, deleteProjectMutation, projectsQuery, getProjectByIdQuery, getProjectsOfUserQuery, projectsAllQuery } from "@/graphql";
import { trace } from "console";
import { GraphQLClient } from "graphql-request";

// import { createProjectMutation, createUserMutation, deleteProjectMutation, updateProjectMutation, getProjectByIdQuery, getProjectsOfUserQuery, getUserQuery, projectsQuery } from "@/graphql";
// import { ProjectForm } from "@/common.types";

const isProduction = process.env.NODE_ENV === 'production';
const apiUrl = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || '' : 'http://127.0.0.1:4000/graphql';
const apiKey = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || '' : 'letmein';
const serverUrl = isProduction ? process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:3000';

const client = new GraphQLClient(apiUrl);

const makeGraphQLRequest = async (query: string, variables = {}) => {
    try {
        return await client.request(query, variables);
    } catch (err) {
        console.log('erre grapg', err)
        throw err;
    }
};

export const getUser = (email: string) => {
    client.setHeader('x-api-key', apiKey)
    return makeGraphQLRequest(getUserQuery, { email })
}

export const createUser = (name: string, email: string, avatarUrl: string) => {
    client.setHeader('x-api-key', apiKey)
    const variables = {
        input: {
            name, email, avatarUrl
        }
    }
    return makeGraphQLRequest(createUserMutation, variables)
}


export const fetchToken = async () => {
    try {
        const res = await fetch(`${serverUrl}/api/auth/token`);
        return res.json()
    } catch (error) {
        throw (error)
    }
}

const uploadImage = async (imagePath: string) => {
    try {
        const res = fetch(`${serverUrl}/api/upload`, {
            method: 'POST',
            body: JSON.stringify({ path: imagePath })
        })
        return (await res).json()
    } catch (error) {
        throw error
    }
}

export const createNewProject = async (form: ProjectForm, creatotId: string, token: string) => {
    const imageURL = await uploadImage(form.image);
    if (imageURL.url) {
        client.setHeader('Authorization', `Bearer ${token}`)
        const variables = {
            id: creatotId,
            input: {
                ...form,
                image: imageURL.url,
                createdBy: {
                    link: creatotId
                }
            }
        }
        return makeGraphQLRequest(createProjectMutation, variables)
    }
}

export const deleteProject = (id: string, token: string) => {
    client.setHeader("Authorization", `Bearer ${token}`);
    return makeGraphQLRequest(deleteProjectMutation, { id });
};


export const fetchAllProjects = (category?: string | null, endCursor?: string | null) => {
    client.setHeader("x-api-key", apiKey);
    if (!category && !endCursor) {
        return makeGraphQLRequest(projectsAllQuery, {});
    } else {
        return makeGraphQLRequest(projectsQuery, { category, endCursor });
    }
};

export const updateProject = async (form: ProjectForm, projectId: string, token: string) => {
    // isBase64DataURL function to check if "value" is a data URL string,
    function isBase64DataURL(value: string) {
        const base64Regex = /^data:image\/[a-z]+;base64,/;
        return base64Regex.test(value);
    }
    let updatedForm = { ...form };

    const isUploadingNewImage = isBase64DataURL(form.image);

    if (isUploadingNewImage) {
        const imageUrl = await uploadImage(form.image);
        if (imageUrl.url) {
            updatedForm = { ...updatedForm, image: imageUrl.url };
        }
    }

    client.setHeader("Authorization", `Bearer ${token}`);
    const variables = {
        id: projectId,
        input: updatedForm,
    };

    return makeGraphQLRequest(updateProjectMutation, variables);
}

export const getProjectDetails = (id: string) => {
    client.setHeader("x-api-key", apiKey);
    return makeGraphQLRequest(getProjectByIdQuery, { id });
}

export const getUserProjects = (id: string, last?: number) => {
    client.setHeader("x-api-key", apiKey);
    return makeGraphQLRequest(getProjectsOfUserQuery, { id, last });
};