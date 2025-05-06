/**
 * Firebase Authentication Service
 * 
 * Provides authentication methods for the application.
 */

import { firebaseAuth } from './Index';

/**
 * AuthService class handles authentication methods
 */
class AuthService {
  /**
   * Get the current authenticated user
   * @returns {object|null} Current user object or null if not authenticated
   */
  getCurrentUser() {
    return firebaseAuth.currentUser;
  }

  /**
   * Get the authentication state
   * @param {function} callback - Callback function to handle auth state changes
   * @returns {function} Unsubscribe function
   */
  onAuthStateChanged(callback) {
    return firebaseAuth.onAuthStateChanged(callback);
  }

  /**
   * Sign out the current user
   * @returns {Promise<void>}
   */
  async signOut() {
    try {
      await firebaseAuth.signOut();
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.message 
      };
    }
  }

  /**
   * Check if the user is authenticated
   * @returns {boolean} True if user is authenticated
   */
  isAuthenticated() {
    return !!firebaseAuth.currentUser;
  }
  
  /**
   * Get user token for API requests
   * @returns {Promise<string>} User ID token
   */
  async getIdToken() {
    try {
      const user = firebaseAuth.currentUser;
      if (!user) {
        throw new Error('User not authenticated');
      }
      const token = await user.getIdToken();
      return token;
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthService();